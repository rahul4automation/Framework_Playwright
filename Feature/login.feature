Feature: Test Best Buy Landing Page


    # Scenario:To Launch Best Buy Application and verify text on Shop page

    #     Given I launch Best buy landing page
    #     Then User able to Validate "Recently Viewed" button
    #     And Verify the below texts are displayed on shop page
    #         | Account      |
    #         | More         |
    #         | Saved Items  |
    #         | Order Status |



    # Scenario: To Launch Best Buy Application and verify the text on Deal page

    #     Given I launch Best buy landing page
    #     Then User able to Validate "Recently Viewed" button
    #     And Verify the below texts are displayed on deal page
    #         | Top Deals       |
    #         | Deal of the Day |
    #         | Credit Cards    |


    # Scenario: To verify drop down more options
    #     Given I launch Best buy landing page
    #     When User able to verify  'Credit Cards' Link on page
    #     And User able to click on 'Credit Cards' link and verify Credit 'My Best Buy® Credit Cards' page



    Scenario: Verify SignIn Button and Login to Credit Card SignIn page
        Given I launch Best buy landing page
        When User able to verify  'Credit Cards' Link on page
        And User able to click on 'Credit Cards' link and verify Credit 'My Best Buy® Credit Cards' page
        And User able to verify SignIn Button and Login using 'rahulece77@gmail.com' and 'Rahul@123te' credit Card Page







