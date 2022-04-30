import axios from "axios";

const define = async (word: string) => {
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    return response.data[0];
  } catch (error) {
    return {
      error: "Definition not found, try another word",
    };
  }
}

export default define;