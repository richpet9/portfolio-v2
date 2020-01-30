module.exports = {
    apps: [
        {
            name: 'portfolio-v2',
            script: 'backend/server.js',
            node_args: '-r dotenv/config',
            watch: ['frontend/public'],
            watch_delay: 1000,
            ignore_watch: ['node_modules']
        }
    ]
};
