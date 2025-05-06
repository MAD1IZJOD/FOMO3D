@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ApiController {
    
    @Autowired
    private PostRepository postRepo;
    
    @PostMapping("/upload")
    public ResponseEntity<?> uploadPost(@RequestParam("image") MultipartFile file,
                                        @RequestParam String userId,
                                        @RequestParam String location) {
        try {
            // Save image logic here
            Post post = new Post();
            post.setUserId(userId);
            post.setLocation(location);
            post.setImageUrl("uploads/"+file.getOriginalFilename());
            postRepo.save(post);
            return ResponseEntity.ok(Map.of("status", "success"));
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }
    
    @GetMapping("/feed")
    public List<Post> getFeed() {
        return postRepo.findAllOrderByCreatedAtDesc();
    }
}