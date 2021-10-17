package de.neuefische.devquiz.controller;

import de.neuefische.devquiz.model.FrontendTry;
import de.neuefische.devquiz.model.Question;
import de.neuefische.devquiz.service.PlayService;
import de.neuefische.devquiz.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/question/play")
public class PlayController {

    private final PlayService playService;

    @Autowired
    public PlayController(PlayService playService) {
        this.playService = playService;
    }

    @GetMapping()
    public Question getQuestion() {
        return playService.getQuestion();
    }

    @PostMapping()
    public Boolean checkAnswer(@RequestBody FrontendTry frontendTry) {
        return playService.checkAnswer(frontendTry);
    }
}
