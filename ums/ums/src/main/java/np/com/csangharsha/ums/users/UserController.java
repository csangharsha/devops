package np.com.csangharsha.ums.users;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private List<User> users = List.of(
            new User(UUID.randomUUID(), "Balkrishna", null, "Chaulagain", "balkrishna.chaulagain"),
            new User(UUID.randomUUID(), "Sita", null, "Chaulagain", "sita.chaulagain"),
            new User(UUID.randomUUID(), "Geeta", null, "Ojha", "geeta.ojha"),
            new User(UUID.randomUUID(), "Sunny", null, "Chaulagain", "sunny.chaulagain"),
            new User(UUID.randomUUID(), "Nikhil", null, "Ghimire", "ram.gautam")
    );

    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok(users);
    }
}
