import { Configuration } from 'webpack';
import path from 'path';
import { BuildEnv, BuildPaths } from './config/build/types/config';
import { BuildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDev = mode === 'development';
    const config: Configuration = BuildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });

    return config;
};
