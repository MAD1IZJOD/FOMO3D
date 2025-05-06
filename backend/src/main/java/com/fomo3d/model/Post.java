package com.fomo3d.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Post {
    @Id
    @GeneratedValue
    private Long id;
    private String userId;
    private String imageUrl;
    private String location;
    private LocalDateTime createdAt = LocalDateTime.now();

    // Getters and setters
}