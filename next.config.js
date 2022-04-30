const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: "sudu",
                mongodb_password: "Da4X82MiXRuUdyD4",
                mongodb_clustername: "mean",
                mongodb_database: "contact",
            },
        };
    }

    return {
        env: {
            mongodb_username: "sudu",
            mongodb_password: "Da4X82MiXRuUdyD4",
            mongodb_clustername: "mean",
            mongodb_database: "contact",
        },
    };
};
