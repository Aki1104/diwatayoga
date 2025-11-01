<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/search.css">

    <title>Search - Diwata Yoga</title>
</head>
<body>

    <header class="sticky-nav">
        <nav class="sticky-nav-container">
            <div class="logo">
                <a href="index.html"><img src="assets/images/logo_diwata_yoga.png" alt="Diwata Yoga Logo"></a>
            </div>
            <ul class="nav-links">
                <li><a href="index.html">HOME</a></li>
                <li><a href="information.html">INFORMATION</a></li>
                <li><a href="search.php" class="active">SEARCH</a></li>
                <li><a href="gallery.html">GALLERY</a></li>
                <li><a href="aboutus.html">ABOUT US</a></li>
            </ul>
        </nav>
    </header>

    <main>

        <section class="search-hero">
            <div class="search-hero-content fade-in">
                <h1>Discover Your Practice</h1>
                <p>Search through our comprehensive library of yoga poses</p>
            </div>
        </section>

        <section class="search-section">
            <div class="search-container fade-in-up">
                <form action="search.php" method="GET" class="search-form">
                    <div class="search-input-wrapper">
                        <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                        <input 
                            type="text" 
                            name="search" 
                            placeholder="Search for yoga poses..." 
                            value="<?php echo isset($_GET['search']) ? htmlspecialchars($_GET['search']) : ''; ?>"
                            class="search-input"
                        >
                    </div>
                    <button type="submit" class="btn btn-primary">Search</button>
                </form>
            </div>

            <div class="results-container">
                <?php
                if (isset($_GET['search'])) {
                    $query = strtolower(trim($_GET['search']));
                    $xmlFilePath = 'assets/data/poses.xml';

                    if (file_exists($xmlFilePath) && !empty($query)) {
                        $xml = simplexml_load_file($xmlFilePath);
                        $results = [];

                        foreach ($xml->pose as $pose) {
                            if (strpos(strtolower($pose->name), $query) !== false) {
                                $results[] = $pose;
                            }
                        }

                        if (count($results) > 0) {
                            echo '<div class="results-header fade-in-up">';
                            echo '<h2>Found ' . count($results) . ' result' . (count($results) > 1 ? 's' : '') . ' for "' . htmlspecialchars($query) . '"</h2>';
                            echo '</div>';
                            
                            echo '<div class="poses-grid">';
                            foreach ($results as $index => $pose) {
                                $imagePath = 'assets/images/' . htmlspecialchars($pose->image);
                                $delay = ($index % 3) * 0.1;
                                
                                echo '<article class="pose-card fade-in-up" style="--delay: ' . $delay . 's;">';
                                echo '  <div class="pose-image-container">';
                                echo '    <img src="' . $imagePath . '" alt="' . htmlspecialchars($pose->name) . '">';
                                echo '    <div class="pose-difficulty ' . strtolower($pose->difficulty) . '">';
                                echo '      ' . htmlspecialchars($pose->difficulty);
                                echo '    </div>';
                                echo '  </div>';
                                echo '  <div class="pose-content">';
                                echo '    <h3>' . htmlspecialchars($pose->name) . '</h3>';
                                echo '    <p class="pose-description">' . htmlspecialchars($pose->description) . '</p>';
                                echo '    <div class="pose-benefits">';
                                echo '      <h4>Benefits</h4>';
                                echo '      <p>' . htmlspecialchars($pose->benefits) . '</p>';
                                echo '    </div>';
                                echo '  </div>';
                                echo '</article>';
                            }
                            echo '</div>';
                        } else {
                            echo '<div class="no-results fade-in">';
                            echo '  <div class="no-results-icon">🔍</div>';
                            echo '  <h3>No results found</h3>';
                            echo '  <p>We couldn\'t find any poses matching "<strong>' . htmlspecialchars($query) . '</strong>"</p>';
                            echo '  <p class="no-results-tip">Try searching for common poses like "mountain", "warrior", or "downward"</p>';
                            echo '</div>';
                        }
                    } elseif (!empty($query)) {
                        echo '<div class="no-results error fade-in">';
                        echo '  <div class="no-results-icon">⚠️</div>';
                        echo '  <h3>Error</h3>';
                        echo '  <p>Could not load pose database. Please try again later.</p>';
                        echo '</div>';
                    }
                } else {
                    echo '<div class="search-suggestions fade-in-up">';
                    echo '  <h3>Popular Searches</h3>';
                    echo '  <div class="suggestions-grid">';
                    echo '    <a href="search.php?search=mountain" class="suggestion-tag">Mountain Pose</a>';
                    echo '    <a href="search.php?search=warrior" class="suggestion-tag">Warrior Poses</a>';
                    echo '    <a href="search.php?search=downward" class="suggestion-tag">Downward Dog</a>';
                    echo '    <a href="search.php?search=tree" class="suggestion-tag">Tree Pose</a>';
                    echo '    <a href="search.php?search=child" class="suggestion-tag">Child\'s Pose</a>';
                    echo '    <a href="search.php?search=cobra" class="suggestion-tag">Cobra Pose</a>';
                    echo '  </div>';
                    echo '</div>';
                }
                ?>
            </div>
        </section>

    </main>

    <footer class="site-footer">
        <div class="footer-content">
            <div class="footer-info">
                <img src="assets/images/logo_diwata_yoga.png" alt="Diwata Yoga Logo" class="footer-logo">
                <p>Experience tranquility and peace through mindful yoga practice.</p>
            </div>
            
            <div class="footer-contact">
                <h3>Get in Touch</h3>
                <form id="contactForm" class="contact-form">
                    <input type="text" id="name" name="name" placeholder="Your Name" required>
                    <input type="email" id="email" name="email" placeholder="Your Email" required>
                    <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2024 Diwata Yoga. All rights reserved.</p>
        </div>
    </footer>

    <script src="js/main.js"></script>

</body>
</html>