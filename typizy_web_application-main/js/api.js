export async function getQuote() {
  try {
    // Fetch multiple sentences from a stable API
    const response = await fetch(
      "https://baconipsum.com/api/?type=all-meat&paras=2&sentences=8",
      { cache: "no-store" }
    );

    const data = await response.json();

    // data is an array of paragraphs
    const paragraph = data.join("\n\n");

    return paragraph;

  } catch (error) {
    console.error("API fetch failed:", error);

    // This should almost never run now
    return "Error fetching typing text. Please check your internet connection.";
  }
}
