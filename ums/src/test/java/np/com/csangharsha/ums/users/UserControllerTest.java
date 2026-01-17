package np.com.csangharsha.ums.users;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import static org.junit.jupiter.api.Assertions.*;

@WebMvcTest(UserController.class)
class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    void shouldReturnListOfUsers() throws Exception {
        mockMvc.perform(get("/api/users"))
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andExpect(jsonPath("$.length()").value(5))
                .andExpect(jsonPath("$[0].firstName").value("Balkrishna"))
                .andExpect(jsonPath("$[0].lastName").value("Chaulagain"))
                .andExpect(jsonPath("$[0].username").value("balkrishna.chaulagain"));
    }
}