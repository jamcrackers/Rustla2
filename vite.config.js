import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    console.log('mode: ', mode);
    return {
        build: {
            target: 'es2022',
        },
        resolve: {
            alias: {
                '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
                '~glyphicons-halflings': resolve(__dirname, 'node_modules/glyphicons-halflings'),
            },
        },
        plugins: [
            react(),
            {
                // ...
                configureServer(server) {
                    server.ws.on('my:from-client', (data, client) => {
                        console.log('Message from client:', data.msg); // Hey!
                        // reply only to the client (if needed)
                        client.send('my:ack', { msg: 'Hi! I got your message!' });
                    });
                },
            },
        ],
        server: {
            cors: true,
            hmr: true,
            port: 3000,
            proxy: {
                '/api': 'https://strims.gg/api',
            },
        },
    };
});
