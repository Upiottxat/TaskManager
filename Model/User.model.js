import { conn } from "../config/db.js";

export const CreateNew = async (Name, Email, Password) => {
    if (!Name || !Email || !Password) return { error: "All fields are required" };

    // Check if user already exists before inserting
    const existingUser = await CheckUser(Email);
    if (existingUser) {
        return { error: "User already exists" };
    }

    // Construct the insert query with parameterized values to prevent SQL injection
    const insertQuery = `INSERT INTO USERS (Name, Email, Password) VALUES (?, ?, ?)`;

    try {
        const [result] = await (await conn).query(insertQuery, [Name, Email, Password]);
        return { success: true, userId: result.insertId, insertId: result.insertId, error: false };
    } catch (error) {
        console.log("Error in CreateNew user model:", error);
        return { error: "Some thing wents wrong" };
    }
};

const CheckUser = async (Email) => {
    if (!Email) return { error: "Email is required" };

    const query = `SELECT id, Email  FROM users WHERE Email = ?`;

    try {
        const [rows] = await (await conn).query(query, [Email]); // Use conn.query

        // Check if a user was found
        if (rows.length > 0) {
            return rows[0]; // Return the first (and only) row
        } else {
            return null; // Indicate no user found
        }
    } catch (error) {
        console.log("Error in GetUser model:", error);
        return { error: "Error retrieving user" };
    }
};

export const GetUser = async (Email) => {
    if (!Email) return { error: "Email is required" };

    const query = `SELECT * FROM users WHERE Email = ?`;

    try {
        const [rows] = await (await conn).query(query, [Email]); // Use conn.query

        // Check if a user was found
        if (rows.length > 0) {
            return rows[0]; // Return the first (and only) row
        } else {
            return null; // Indicate no user found
        }
    } catch (error) {
        console.log("Error in GetUser model:", error);
        return { error: "Error retrieving user" };
    }
};