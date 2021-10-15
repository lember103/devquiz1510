package de.neuefische.devquiz.controller;

import de.neuefische.devquiz.model.FrontendTry;
import de.neuefische.devquiz.model.Question;
import de.neuefische.devquiz.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/question")
public class QuestionController {

    private final QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping()
    public List<Question> listQuestion() {
        return questionService.getAllQuestions();
        // hallo
    }

    @GetMapping("/{id}")
    public Question get(@PathVariable String id) {
        return questionService.get(id);
    }

    @GetMapping("/play")
    public Question getQuestion(){
        return questionService.getQuestion();
    }

    @PostMapping()
    public Question addQuestion(@RequestBody Question newQuestion) {
        return questionService.addQuestion(newQuestion);
    }

          //.post('/api/question/play', question, chosenId )
            //Map<String, String> json

    @PostMapping("/play")
    public boolean checkAnswer(@RequestBody FrontendTry frontendTry){
        System.out.println("QuestionController: frontendTry" + frontendTry.toString());
        return questionService.checkAnswer(frontendTry);
    }
}
