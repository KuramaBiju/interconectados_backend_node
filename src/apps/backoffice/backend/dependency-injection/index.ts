import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';

const boot = async () => {
    const container = new ContainerBuilder();
    const env = process.env.NODE_ENV ?? 'dev';

    try {
        const loader = new YamlFileLoader(container);
        await loader.load(`${__dirname}/application_${env}.yaml`);
        await container.compile();
    } catch (error) {
        console.error("Error while loading:", error);
    }
  
    return container;
}

const container = boot();
export default container;