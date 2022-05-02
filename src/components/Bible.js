import axios, { Axios } from "axios";


const [bible, setBible] = useState('')

const getBibleVerse = () => {
    Axios.get('https://official-joke-api.appspot.com/random_joke')
    .then((verseResult) => {
        console.log('verse', verse);
        setBible(verseResult.data.chapter + ':' + verseResult.data.verse)
        }
    );

return <div>
    Get Bible Verse:
    <button onClick={getBibleVerse}>Click me</button>
    {bible}
</div>
}



export default getBibleVerse;