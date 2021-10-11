import { NextApiRequest, NextApiResponse } from 'next';

import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

export default function handler(_: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(`${serverRuntimeConfig.version}+${serverRuntimeConfig.gitCommitHash}`)
}