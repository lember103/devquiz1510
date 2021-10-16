package de.neuefische.devquiz.controller;

import de.neuefische.devquiz.model.FrontendTry;
import de.neuefische.devquiz.model.Question;
import de.neuefische.devquiz.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/question/play")
public class PlayController {

    private final QuestionService questionService;

    @Autowired
    public PlayController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping()
    public Question getQuestion() {
        return questionService.getQuestion();
    }

    @PostMapping()
    public boolean checkAnswer(@RequestBody FrontendTry frontendTry) {
        return questionService.checkAnswer(frontendTry);
    }
}
