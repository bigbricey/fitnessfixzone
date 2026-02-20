import os
import glob
import re

app_dir = "/Users/bigbricey/.gemini/antigravity/scratch/fitnessfixzone/src/app"

# Directories to skip (only target the old historical articles, not the new reviews or functional pages)
skip_dirs = ['about', 'contact', 'disclaimer', 'privacy', 'reviews', 'tools', 'guides']

# The Funnel block to inject at the bottom of every article
funnel_html = """
                    <div className="recommended-funnel" style={{ marginTop: 'var(--space-3xl)', padding: 'var(--space-xl)', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(245, 240, 235, 0.05)' }}>
                        <h3 style={{ color: 'var(--accent)', marginBottom: 'var(--space-sm)' }}>🔥 Editor's Top Recommendations (2026)</h3>
                        <p style={{ marginBottom: 'var(--space-md)' }}>
                            Our team rigorously tests and reviews the top supplements and programs in the industry. Based on clinical efficacy, here are our top 5 recommended products right now:
                        </p>
                        <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><a href="/reviews/mitolyn" style={{ color: 'var(--text-primary)', fontWeight: 'bold', textDecoration: 'underline', textDecorationColor: 'var(--accent)' }}>1. MITOLYN Review</a> <span style={{ color: 'var(--text-muted)' }}>— The best new cellular weight loss formula.</span></li>
                            <li><a href="/reviews/citrusburn" style={{ color: 'var(--text-primary)', fontWeight: 'bold', textDecoration: 'underline', textDecorationColor: 'var(--accent)' }}>2. CitrusBurn Review</a> <span style={{ color: 'var(--text-muted)' }}>— High-potency thermogenic fat burner.</span></li>
                            <li><a href="/reviews/the-brain-song" style={{ color: 'var(--text-primary)', fontWeight: 'bold', textDecoration: 'underline', textDecorationColor: 'var(--accent)' }}>3. The Brain Song Review</a> <span style={{ color: 'var(--text-muted)' }}>— Audio-engineered memory and focus enhancement.</span></li>
                            <li><a href="/reviews/prostavive" style={{ color: 'var(--text-primary)', fontWeight: 'bold', textDecoration: 'underline', textDecorationColor: 'var(--accent)' }}>4. ProstaVive Review</a> <span style={{ color: 'var(--text-muted)' }}>— Premium prostate and male vitality support.</span></li>
                            <li><a href="/reviews/audifort" style={{ color: 'var(--text-primary)', fontWeight: 'bold', textDecoration: 'underline', textDecorationColor: 'var(--accent)' }}>5. Audifort Review</a> <span style={{ color: 'var(--text-muted)' }}>— Antioxidant support for auditory health.</span></li>
                        </ul>
                    </div>
"""

updated_count = 0

for root, dirs, files in os.walk(app_dir):
    dir_name = os.path.basename(root)
    # Only process directories that are direct children of src/app
    if root == app_dir:
        continue
    
    # Check if this dir is in the skip list
    if any(skip in root for skip in skip_dirs):
        continue
        
    for file in files:
        if file == "page.tsx":
            filepath = os.path.join(root, file)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
                
            original_content = content
            
            # Use regex to find the closing tags of the main article section
            # We want to insert the funnel right before the final closing </div> of the <section className="section">
            # Pattern: matches </div> \n </section> \n </main>
            end_pattern = re.compile(r'(</div>\s*</section>\s*</main>)')
            
            # Only inject if it's not already there
            if "recommended-funnel" not in content:
                 content = end_pattern.sub(funnel_html + r'\n                \1', content)
                 
            if content != original_content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(content)
                updated_count += 1
                print(f"Injected Money Funnel into: {dir_name}")

print(f"\\nSuccessfully injected the ClickBank interlinking funnel into {updated_count} historical articles.")
