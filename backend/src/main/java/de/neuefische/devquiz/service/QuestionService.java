package de.neuefische.devquiz.service;

import de.neuefische.devquiz.model.Answer;
import de.neuefische.devquiz.model.FrontendTry;
import de.neuefische.devquiz.model.Question;
import de.neuefische.devquiz.repo.QuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;
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

    public Question addQuestion(Question newQuestion) {
        System.out.println(newQuestion);
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
        return allQuestions.get(0);
    }

    public boolean checkAnswer(FrontendTry frontendTry) {

        Question actualQuestion = frontendTry.getQuestion();
        String chosenId = frontendTry.getChosenId();
        System.out.println("chosenId: " + chosenId);


        for (Answer answer : actualQuestion.getAnswers()) {
            System.out.println("answer.getCorrect: " + answer.getCorrect());
            System.out.println("answer.getID: " + answer.getId());
            if ((answer.getCorrect()) && (answer.getId().equals(chosenId))) {
                return true;
            }
        }
        return false;
    }
}
