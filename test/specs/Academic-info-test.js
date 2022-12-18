describe('academicinfo.ro', () => {

    it('should have the correct page title', async () => {

        // Open the main page of the website
        await browser.url('https://academicinfo.ubbcluj.ro/Info/');

        // Verify if the Login page has a specific title
        await expect(browser).toHaveTitle('AcademicInfo');
    });


   it('should contain a Help button for students', async () => {
        const helpButton = await $('#LabelStudTitlu');

        // Verify if the Help button for students is displayed
        await expect(helpButton).toBeDisplayed();

        // Click on Help button
        await helpButton.click();
    });


   it('should login with correct credentials', async () => {
        const nameButton = await $('#txtUsername');
        const passwordButton = await $('#txtPassword');
        const loginButton = await $('#btnLogin');

        // Set the Username in the first input
        await nameButton.setValue('ma.mi0159776s');

        // Set the Password in the second input
        await passwordButton.setValue('password'); // From security reasons, the real password is not written in the final code

        // Pause the execution of the test for 10 seconds, to access manually the reCAPTCHA button
        await browser.pause(10000);

        // After checking the reCAPTCHA button, click on the Login button
        await loginButton.click();
    });


    it('should access the Students section', async () => {
        const studentButton = await $('#ctl00_ContentPlaceHolder1_lkStudenti');

        // Click on the Students Section button
        await studentButton.click();

        const closedButton = await $('#ctl00_ContentPlaceHolder1_btnInchide');

        // Click on the Closed button of the pop-up which is shown
        await closedButton.click();
    });


    it('should contain a MS Teams tutorial button', async () => {
        const tutorialButton = await $('#ctl00_ContentPlaceHolder1_lblMicrosoftTeams14');

        // It is expected the MS Teams Information button to be displayed for students 
        await expect(tutorialButton).toBeDisplayed;
    });


    it('should contain the correct Copyright for 2022', async () => {
        const copyrightButton = await $('#copy_footer');

        // Scroll down the left menu
        browser.scroll(10, 300);

        // This test verifies the existence of an up-to-date Copyright, for current year (2022)
        await expect(copyrightButton).toHaveTextContaining('Copyright © UBB - 2022\nTermeni și Condiții       Politica de confidentialitate');
    });


    it('should have a Curriculum plan section', async () => {
        const curriculumButton = await $('#ctl00_Label1PlanInvatamant');
        const planButton = await $('#ctl00_ContentPlaceHolder1_ddlSectii');
        const dppdButton = await $('//*[@id="ctl00_ContentPlaceHolder1_ddlSectii"]/option[2]')

        // Click on the Curriculum Plans section from the left menu
        await curriculumButton.click();

        // Click on the button with the curriculum from all universitary programs (BA, MA, DPPD etc.)
        await planButton.click();

        // Select and click on the section DPPD 2 (University Pedagogical Program from Master Degree program)
        await dppdButton.click();
     });


   it('should select Evaluation of teachers button', async () => {
        const evaluationButton = await $('#ctl00_Label1EvaluareProfesori');
        const sem2Button = await $('#ctl00_ContentPlaceHolder1_CheckBox7');
        const sem1Button = await $('#ctl00_ContentPlaceHolder1_CheckBox6');

        // Click on the Teachers Evaluation button from the left menu
        await evaluationButton.click();

        // Click on the Semester 2 button
        await sem2Button.click();

        // Click on the Semester 1 button
        await sem1Button.click();
     });


   it('should log out from the website', async () => {
        const logoutButton = await $('.fa-sign-out-alt');

        // At the end of the test, click on the Logout button
        await logoutButton.click();

        // Put a 1 second pause after the logout
        await browser.pause(1000);
     });
});