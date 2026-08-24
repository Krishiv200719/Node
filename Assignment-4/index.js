const fs = require("fs");

// Task 1: Create Student Information File
const studentData = `Name: Krishiv Solanki
Course: Full Stack Development
Technology: Node.js
`;

fs.writeFile("student.txt", studentData, (err) => {
    if (err) {
        console.error("Error creating file:", err);
        return;
    }

    console.log("File created successfully");

    // Task 2: Read Student Information
    fs.readFile("student.txt", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }

        console.log("\nStudent Information:");
        console.log("--------------------");
        console.log(data);

        // Task 3: Update Student Information
        const additionalData = `Experience: 1 Year
City: Kolkata
`;

        fs.appendFile("student.txt", additionalData, (err) => {
            if (err) {
                console.error("Error updating file:", err);
                return;
            }

            console.log("Data updated successfully");

            // Display updated information
            fs.readFile("student.txt", "utf8", (err, updatedData) => {
                if (err) {
                    console.error("Error reading updated file:", err);
                    return;
                }

                console.log("\nUpdated Student Information:");
                console.log("----------------------------");
                console.log(updatedData);

                // Task 4: Rename File
                fs.rename("student.txt", "studentDetails.txt", (err) => {
                    if (err) {
                        console.error("Error renaming file:", err);
                        return;
                    }

                    console.log("File renamed successfully");

                    // Task 5: Delete File
                    const readline = require("readline");

                    const rl = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                    });

                    rl.question("Do you want to delete studentDetails.txt? (yes/no): ", (answer) => {
                        if (answer.toLowerCase() === "yes") {
                            fs.unlink("studentDetails.txt", (err) => {
                                if (err) {
                                    console.error("Error deleting file:", err);
                                    return;
                                }

                                console.log("File deleted successfully");
                                rl.close();
                            });
                        } else {
                            console.log("File was not deleted.");
                            rl.close();
                        }
                    });
                });
            });
        });
    });
});