package com.basketsales.modules.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth")
public class RoleController {
	
	 @Autowired
	    RoleService roleService;

	    /**
		 * Get Products.
		 * @return List<Product>
		 */
	    @RequestMapping(method = RequestMethod.GET, value = "/roles")
	    public Iterable<Role> role() {
	        return roleService.findAll();
	    }

}
