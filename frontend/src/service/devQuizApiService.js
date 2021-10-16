import axios from 'axios'

export function getQuestions() {
  return axios
    .get('/api/question')
    .then(response => response.data)
    .catch(err => console.error(err))
}

export function addQuestion(newQuestion) {
  return axios
    .post('/api/question', newQuestion)
    .then(response => response.data)
    .catch(console.error)
}

export function getRandomQuestion() {
  return axios
      .get('/api/question/random')
      .then(response => response.data)
      .catch(err => console.error(err))
}

export function getQuestionById(id) {
  return axios
      .get('/api/question/'+id)
      .then(response => response.data)
      .catch(err => console.error(err))
}
