import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === "POST") {
        const { email, name, message } = req.body;
        if (
            !email ||
            !email.includes("@") ||
            !name ||
            name.trim() === "" ||
            !message ||
            message.trim() === ""
        ) {
            res.status(422).json({ message: "Invalid input" });
            return;
        }
        const newMessage = { email, name, message };

        let client;

        const connectionStrintg = `mongodb+srv://${process.env.mongodb_username}:${process.env.mognodb_password}@${process.env.mongodb_cluster}.r3iag.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

        try {
            console.log(process.env.DB_USER);
            client = await MongoClient.connect(connectionStrintg);
        } catch (err) {
            res.status(500).json({ message: "Could not connect to database" });
            return;
        }

        const db = client.db("contact");

        let result;

        try {
            result = await db.collection("messages").insertOne(newMessage);
        } catch (err) {
            client.close();
            res.status(500).json({ message: "Storing message failed" });
            return;
        }

        client.close();

        res.status(201).json({
            message: "Successfully stored message",
            data: result,
        });
    }
}

export default handler;
