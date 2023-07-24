Feature: Test Best Buy Landing Page

    Scenario:To Launch Best Buy Application and verify text on Shop page

        Given I launch Best buy landing page
        Then User able to Validate "Recently Viewed" button
        Then Verify the below texts are displayed on shop page
            | Account      |
            | More         |
            | Saved Items  |
            | Order Status |



    Scenario: To Launch Best Buy Application and verify the text on Deal page 

        Given I launch Best buy landing page
        Then User able to Validate "Recently Viewed" button
        Then Verify the below texts are displayed on deal page
            | Top Deals       |
            | Deal of the Day |


