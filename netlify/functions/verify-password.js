exports.handler = async function(event, context) {
    const { password } = JSON.parse(event.body);
    const correctPassword = process.env.PASSWORD;

    if (password === correctPassword) {
        return {
            statusCode: 200,
            body: JSON.stringify({ valid: true })
        };
    } else {
        return {
            statusCode: 401,
            body: JSON.stringify({ valid: false })
        };
    }
};
