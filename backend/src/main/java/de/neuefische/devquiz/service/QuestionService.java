package de.neuefische.devquiz.service;

import de.neuefische.devquiz.model.Answer;
import de.neuefische.devquiz.model.PlayQuestion;
import de.neuefische.devquiz.model.Question;
import de.neuefische.devquiz.repo.QuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class QuestionService {

    private final QuestionRepo questionRepo;

    @Autowired
    public QuestionService(QuestionRepo questionRepo) {
        this.questionRepo = questionRepo;
    }

    public List<Question> getAllQuestions() {
        return questionRepo.findAll();
    }

    public Question addQuestion(Question newQuestion){
        return questionRepo.save(newQuestion);
    }


    public Question get(String id) {
        Optional<Question> optionalQuestion = questionRepo.findById(id);

        if (optionalQuestion.isEmpty()) {
            throw new NoSuchElementException("Question with id:" + id + " not found!");
        }

        return optionalQuestion.get();
    }

    public PlayQuestion createRandomPlayQuestion(){
        // get all questions from repo
        List<Question> questions = questionRepo.findAll();
        if (questions.size() == 0){
            throw new NoSuchElementException("No questions in repo");
        }
        // get random question
        int randomIndex = (int)(Math.random() * questions.size());
        Question randomQuestion = questions.get(randomIndex);
        // get answers from random question
        List<Answer> answers = randomQuestion.getAnswers();
        // save answers in new list
        List<String> answerTexts = new ArrayList<>();
        for (Answer answer : answers) {
            answerTexts.add(answer.getAnswerText());
        }
        // create new playQuestion
        PlayQuestion playQuestion = new PlayQuestion();
        playQuestion.setId(randomQuestion.getId());
        playQuestion.setQuestionText(randomQuestion.getQuestionText());
        playQuestion.setAnswers(answerTexts);

        return playQuestion;
    }

}

















