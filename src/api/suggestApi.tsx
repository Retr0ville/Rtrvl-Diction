import axios from 'axios';

type Suggestions = {
  word: string;
  score: number;
}[];
const suggest = async (word: string) => {
  try {
    const response = await axios.get(
      `https://api.datamuse.com/sug?s=${word}`
    );
    const results = response.data as Suggestions;
    const suggestions = results.map(suggestion => suggestion.word);
    const sliced = suggestions.slice(0, 6);
    return sliced;
  } catch (error) {
    return [];
  }
}

export default suggest;