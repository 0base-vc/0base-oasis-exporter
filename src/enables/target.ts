import TargetAbstract from "../target.abstract";
import axios from 'axios';
import {Registry, Gauge} from 'prom-client';

import OasisClient from "../oasis.client";

export default class Target extends TargetAbstract {
    private readonly grpcServer = process.env.GRPC_SERVER;
    private readonly existMetricUrl = process.env.METRIC_EXIST_URL;
    private readonly address = process.env.METRIC_ADDRESS;
    private readonly validatorAddress = process.env.METRIC_VALIDATOR_ADDRESS;

    private readonly cache = {};
    private readonly digit = 9;
    private readonly metricPrefix = 'oasis';

    private readonly client = new OasisClient(this.grpcServer);
    private readonly registry = new Registry();

    private readonly balanceGauge = new Gauge({
        name: `${this.metricPrefix}_address_balance`,
        help: 'Total balance of address',
        labelNames: ['address']
    });


    private readonly availableGauge = new Gauge({
        name: `${this.metricPrefix}_address_available`,
        help: 'Available balance of address',
        labelNames: ['address']
    });

    private readonly delegatedGauge = new Gauge({
        name: `${this.metricPrefix}_address_delegated`,
        help: 'Delegated balance of address',
        labelNames: ['address']
    });

    private readonly unbondingGauge = new Gauge({
        name: `${this.metricPrefix}_address_unbonding`,
        help: 'Unbonding balance of address',
        labelNames: ['address']
    });

    private readonly rankGauge = new Gauge({
        name: `${this.metricPrefix}_validator_rank`,
        help: 'Rank of validators',
        labelNames: ['validator']
    });
    private readonly maxValidatorGauge = new Gauge({
        name: `${this.metricPrefix}_state_scheduler_max_validator_count`,
        help: 'Limitation of validators count',
    });

    public constructor() {
        super();

        this.registry.registerMetric(this.balanceGauge);
        this.registry.registerMetric(this.availableGauge);
        this.registry.registerMetric(this.delegatedGauge);
        this.registry.registerMetric(this.unbondingGauge);

        this.registry.registerMetric(this.rankGauge);
        this.registry.registerMetric(this.maxValidatorGauge);
    }

    public async makeMetrics(): Promise<string> {

        let customMetrics = '';
        try {
            const height = await this.client.getHeight();

            await Promise.all([
                await this.updateAddressBalance(this.address),
                await this.updateRank(height, this.validatorAddress),
                await this.updateMaxValidator(),
            ]);

            customMetrics = this.registry.metrics();

        } catch (e) {
            console.error('makeMetrics', e);
        }


        return customMetrics + '\n' + await this.loadExistMetrics();
    }

    private async updateAddressBalance(address: string): Promise<void> {

        const available = await this.client.getBalance(address) / Math.pow(10, this.digit);
        this.availableGauge.labels(address).set(available);

        const delegated = await this.client.getEscrowActiveBalance(address) / Math.pow(10, this.digit);
        this.delegatedGauge.labels(address).set(delegated);

        const unbonding = await this.client.getEscrowDebondingBalance(address) / Math.pow(10, this.digit);
        this.unbondingGauge.labels(address).set(unbonding);

        this.balanceGauge.labels(address).set(available + delegated + unbonding);
    }


    private async updateRank(height: number, validator: string): Promise<void> {
        const rank = await this.client.getRank(height, validator);
        this.rankGauge.labels(validator).set(rank);
    }

    private async updateMaxValidator(): Promise<void> {
        this.maxValidatorGauge.set(120);
    }

    private async loadExistMetrics(): Promise<string> {
        return this.get(this.existMetricUrl, response => {
            return response.data;
        });
    }

    private async get(url: string, process: (response: { data: any }) => string | number | void) {
        return axios.get(url).then(response => {
            const result = process(response);
            this.cache[url] = result;
            return result;
        }).catch((e) => {
            console.error(e);

            const result = this.cache[url];
            if (result === undefined)
                return '';
            else
                return result;
        });
    }
}

