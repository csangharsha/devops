package np.com.csangharsha.ums.users;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class User {
    private UUID userId;
    private String firstName;
    private String middleName;
    private String lastName;
    private String username;
}
