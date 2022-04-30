import axios from "axios";

export type RandomWord = {
  word: string;
  definition: string;
  pronunciation: string;
}
const randomWord = async (): Promise<Partial<RandomWord>> => {
  try {
    const response = await axios.get(
      "https://random-words-api.vercel.app/word"
    );
    return response.data[0];
  } catch (error) {
    return {};
  }
};

export default randomWord;