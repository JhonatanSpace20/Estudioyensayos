module.exports = {
    editorjs: {
        enabled: true,
    },
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
            cloud_name: 'hackatonmidudev',
            api_key: '252194272727914',
            api_secret: '12c012kKwJ5p8xvhKC5dqGKY1-s',
            },
            actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
            },
        },
    },
};