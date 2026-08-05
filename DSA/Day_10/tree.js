const HEIGHT = 60; // Try 100, 150, or more

const maxWidth = HEIGHT * 2 - 1;

for (let i = HEIGHT; i >= 1; i--) {
    const branchWidth = i * 2 - 1;
    const padding = " ".repeat((maxWidth - branchWidth) / 2);

    if (branchWidth === 1) {
        console.log(padding + "|");
    } else {
        console.log(
            padding +
            "/" +
            "|".repeat(branchWidth - 2) +
            "\\"
        );
    }
}

// Trunk
for (let i = 0; i < 8; i++) {
    console.log(" ".repeat(maxWidth / 2) + "|");
}