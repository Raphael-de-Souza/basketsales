package com.basketsales.modules.auth;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    @Transactional
    public List<Role> findAll() {
    	return roleRepository.findAll();
    }
    
    @Transactional
    public Optional<Role> findById(final String id) {
    	return roleRepository.findById(id);
    }
    
    @Transactional
    public Role findByRoleName(final String roleName) {
    	return roleRepository.findByRoleName(roleName);
    }
    
    @Transactional
    public void deleteRole(final Role role) {
        roleRepository.delete(role);
    }
    
    @Transactional
    public void saveRole(final Role role) {
        roleRepository.save(role);
    }
}

