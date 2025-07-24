import fs from "fs";
import path from "path";

export const writeToCSV = async (userData) => {
  const filePath = path.resolve("./users.csv");

  const headers = [
    "Full Name",
    "Age",
    "Country",
    "State",
    "Province",
    "Email",
    "Industry",
    "Registered At",
  ];

  const newRow = [
    userData.fullName || "",
    userData.age || "",
    userData.country || "",
    userData.state || "",
    userData.province || "",
    userData.email || "",
    userData.industry || "",
    new Date().toLocaleString(),
  ];

  const line = newRow.map((v) => `"${v}"`).join(",") + "\n";

  const fileExists = fs.existsSync(filePath);

  try {
    if (!fileExists) {
      // Write headers first
      const headerLine = headers.join(",") + "\n";
      fs.writeFileSync(filePath, headerLine + line);
      console.log("CSV file created and data written.");
    } else {
      // Append only data
      fs.appendFileSync(filePath, line);
      console.log("Data appended to existing CSV file.");
    }
  } catch (error) {
    console.error("Error writing to CSV:", error);
    throw error;
  }
};
