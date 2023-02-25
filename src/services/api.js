import axios from 'axios';

export function getBooks() {
    return axios.get('https://www.abibliadigital.com.br/api/books');
}

export function getChapter(abbrev, section) {
    return axios.get(`https://www.abibliadigital.com.br/api/verses/nvi/${abbrev}/${section}`);
}