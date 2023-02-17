import { SKILLS } from '../../app/shared/SKILLS';

export const selectAllSkills = () => {
    return SKILLS;
}

export const selectRandomSkill = () => {
    return SKILLS[Math.floor(SKILLS.length * Math.random())];
}

export const selectSkillById = (id) => {
    return SKILLS.find((skill) => skill.id === id);
}