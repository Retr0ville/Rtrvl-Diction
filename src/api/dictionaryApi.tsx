import axios from "axios";

const define = async (word: string) => {
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    return response.data;
  } catch (error) {
    return [];
  }
}

export default define;