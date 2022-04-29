import axios from "axios";

type RandomWord = {
  word: string;
  definition: string;
  pronunciation: string;
}
const randomWord = async (): Promise<Partial<RandomWord>> => {
  try {
    const response = await axios.get(
      "https://random-words-api.vercel.app/word"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return {};
  }
};

export default randomWord;