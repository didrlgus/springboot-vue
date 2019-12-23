package com.springbootvue.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/index2")
    public String init() {

        return "index2";
    }
}
