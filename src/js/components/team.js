export class TeamDepartment {
    constructor() {
        this.buttons = document.querySelectorAll('.department-btn');
        this.memberGrids = document.querySelectorAll('.members-grid');
        this.init();
    }
    
    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleDepartmentChange(e.currentTarget);
            });
        });
        
        if (this.buttons.length > 0) {
            this.handleDepartmentChange(this.buttons[0]);
        }
    }
    
    handleDepartmentChange(clickedButton) {

        this.buttons.forEach(btn => btn.classList.remove('active'));
        

        clickedButton.classList.add('active');
        

        this.memberGrids.forEach(grid => grid.classList.add('hidden'));
        

        const buttonIndex = Array.from(this.buttons).indexOf(clickedButton);
        const departmentNames = ['development', 'analytics', 'marketing', 'finance', 'export'];
        const department = departmentNames[buttonIndex];
        const targetGrid = document.getElementById(`${department}-members`);
        
        if (targetGrid) {
            targetGrid.classList.remove('hidden');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TeamDepartment();
});