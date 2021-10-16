package de.neuefische.devquiz.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlayQuestion {

    private String id;
    private String questionText;
    private List<String> answers;
}
