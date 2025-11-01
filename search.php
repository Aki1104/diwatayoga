<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Link to NEW global stylesheet -->
    <link rel="stylesheet" href="css/global.css">
    <!-- Link to the page-specific stylesheet -->
    <link rel="stylesheet" href="css/search.css">

    <title>Search - Diwata Yoga</title>
</head>
<body>

    <!-- =========== Header & Navigation Bar =========== -->
    <header class="sticky-nav">
        <nav class="sticky-nav-container">
            <!-- Logo with link to home -->
            <div class="logo">
                <a href="home.html"><img src="assets/images/logo_diwata_yoga.png" alt="Diwata Yoga Logo"></a>
            </div>
            <!-- Navigation Links -->
            <ul>
                <li><a href="home.html">HOME</a></li>
                <li><a href="information.html">INFORMATION</a></li>
                <!-- 'active' class highlights the current page -->
                <li><a href="search.php" class="active">SEARCH</a></li>
                <li><a href="gallery.html">GALLERY</a></li>
                <li><a href="aboutus.html">ABOUT US</a></li>
            </ul>
        </nav>
    </header>

    <!-- =========== Main Content =========== -->
    <main>

        <!-- =========== Search Intro & Form =========== -->
        <section class="search-intro fade-in">
            <h1 class="si-header">Search</h1>
            <p>Discover the Essence: Search Through Our Yoga Sessions and Events.</p>
            <div class="search-bar">
                <!-- This form submits back to this same page (search.php) using the GET method -->
                <form action="search.php" method="GET">
                    <input type="text" name="search" placeholder="Search for yoga poses..." value="<?php echo isset($_GET['search']) ? htmlspecialchars($_GET['search']) : ''; ?>">
                    <button type="submit" class="btn">Search</button>
                </form>
            </div>
        </section>

        <!-- =========== Search Results =========== -->
        <section class="search-results-container">
            <div class="search-results">
                <?php
                // Check if the 'search' parameter is set in the URL (i.e., if the form was submitted)
                if (isset($_GET['search'])) {
                    
                    // Sanitize the search query to prevent issues
                    $query = strtolower(trim($_GET['search']));
                    
                    // Define the path to the XML file
                    $xmlFilePath = 'assets/data/poses.xml';

                    if (file_exists($xmlFilePath) && !empty($query)) {
                        // Load the XML file
                        $xml = simplexml_load_file($xmlFilePath);
                        $results = []; // Array to hold matching poses

                        // Loop through each '<pose>' tag in the XML
                        foreach ($xml->pose as $pose) {
                            // Check if the query string is found anywhere in the pose's name
                            if (strpos(strtolower($pose->name), $query) !== false) {
                                $results[] = $pose; // Add the matching pose to the $results array
                            }
                        }

                        // Check if we found any results
                        if (count($results) > 0) {
                            // Loop through the results and display them as HTML
                            foreach ($results as $pose) {
                                // Construct the correct image path
                                $imagePath = 'assets/images/' . htmlspecialchars($pose->image);
                                
                                // Display the result as an <article>
                                echo '<article class="pose fade-in-up">';
                                echo '  <a href="' . $imagePath . '" target="_blank" class="pose-image-link">';
                                echo '    <img src="' . $imagePath . '" alt="' . htmlspecialchars($pose->name) . '">';
                                echo '  </a>';
                                echo '  <div class="pose-details">';
                                echo '    <h2>' . htmlspecialchars($pose->name) . '</h2>';
                                echo '    <p><strong>Description:</strong> ' . htmlspecialchars($pose->description) . '</p>';
                                echo '    <p><strong>Benefits:</strong> ' . htmlspecialchars($pose->benefits) . '</p>';
                                echo '    <p><strong>Difficulty:</strong> ' . htmlspecialchars($pose->difficulty) . '</p>';
                                echo '  </div>';
                                echo '</article>';
                            }
                        } else {
                            // Display a "no results" message if the array is empty
                            echo '<p class="no-results fade-in">No results found for "<strong>' . htmlspecialchars($query) . '</strong>".</p>';
                        }
                    } elseif (!empty($query)) {
                        // Display an error if the XML file is missing
                        echo '<p class="no-results error fade-in">Error: Could not load data file.</p>';
                    }
                    // If the query is empty, nothing will be displayed (no 'else' needed)
                }
                ?>
            </div>
        </section>
    
    </main>

    <!-- =========== JavaScript =========== -->
    <!-- All JavaScript is now linked from an external file -->
    <script src="js/main.js"></script>

</body>
</html>