package de.neuefische.devquiz.service;

import de.neuefische.devquiz.model.Answer;
import de.neuefische.devquiz.model.FrontendTry;
import de.neuefische.devquiz.model.Question;
import de.neuefische.devquiz.repo.QuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class QuestionService {

    private final QuestionRepo questionRepo;
    private List<Question> answeredQuestions = List.of();
    int allQuestionsIndexForQuestionForFrontend = 0;

    @Autowired
    public QuestionService(QuestionRepo questionRepo) {
        this.questionRepo = questionRepo;
    }

    public List<Question> getAllQuestions() {
        return questionRepo.findAll();
    }

    public Question addQuestion(Question newQuestion) {
        return questionRepo.save(newQuestion);
    }

    public Question get(String id) {
        Optional<Question> optionalQuestion = questionRepo.findById(id);
        if (optionalQuestion.isEmpty()) {
            throw new NoSuchElementException("Question with id:" + id + " not found!");
        }
        return optionalQuestion.get();
    }

    public Question getQuestion() {
        List<Question> allQuestions = questionRepo.findAll();
        if (allQuestions.size() == 0) {
            return null;
        }

        Collections.shuffle(allQuestions);

        for (Question answeredQuestion : answeredQuestions) {
            if (answeredQuestion.equals(allQuestions.get(allQuestionsIndexForQuestionForFrontend))) {
                allQuestionsIndexForQuestionForFrontend++;
            } else {
                return allQuestions.get(allQuestionsIndexForQuestionForFrontend);
            }

            if (allQuestionsIndexForQuestionForFrontend >= allQuestions.size()) {       //size-1?
                allQuestionsIndexForQuestionForFrontend = 0;
            }

            if (answeredQuestions.size() >= allQuestions.size()) {
                answeredQuestions.clear();
            }
        }
        return allQuestions.get(0);
    }

    public boolean checkAnswer(FrontendTry frontendTry) {
        //Deconstruct FrontendTry-Objekt
        Question actualQuestion = frontendTry.getQuestion();
        String chosenId = frontendTry.getChosenId();
        for (Answer answer : actualQuestion.getAnswers()) {
            if ((answer.getCorrect()) && (answer.getId().equals(chosenId))) {
                return true;
            }
        }
        return false;
    }
}
