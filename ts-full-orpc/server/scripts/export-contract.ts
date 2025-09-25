import fs from 'node:fs';
import { minifyContractRouter } from '@orpc/contract';
import router from '../src/orpc/router';

const minifiedRouter = minifyContractRouter(router);

fs.writeFileSync('./dist/contract.json', JSON.stringify(minifiedRouter));
