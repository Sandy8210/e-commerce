import bcrypt from "bcryptjs";
import sequelize from "../config/db.js";

export const test = (req, res) => {
  res.status(200).json({ success: true, message: "test successful" });
};

export const registerUser = async (req, res) => {
  const { name, password, email } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    await sequelize.query(
      `
        INSERT INTO users(name , email , password) 
        VALUES (:name , :email , :password)
    `,
      {
        replacements: {
          name: name,
          email: email,
          password: hashedPassword,
        },
        type: sequelize.QueryTypes.INSERT,
      }
    );

    res.status(201).json({ success: true, message: "registration completed" });
  } catch (error) {
    console.error("Error registering user:", error);
    return res
      .status(500)
      .json({ success: false, message: "registraton failed" });
  }
};

export const loginUser = async (req, res) => {};
