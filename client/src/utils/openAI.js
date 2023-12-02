import OpenAI from 'openai';
import { openAI_key } from './constants';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_AI,
  dangerouslyAllowBrowser:true // defaults to process.env["OPENAI_API_KEY"]
});
export default openai; 