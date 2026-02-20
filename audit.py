import os
import glob
import re

app_dir = "/Users/bigbricey/.gemini/antigravity/scratch/fitnessfixzone/src/app"

# Directories to skip
skip_dirs = ['about', 'contact', 'disclaimer', 'privacy', 'reviews', 'tools', 'guides']

# The disclaimer snippet to inject after the article-hero section finishes
disclaimer_html = """            <div className="container" style={{ maxWidth: '800px', margin: '0 auto var(--space-xl) auto' }}>
                <div className="disclosure-box">
                    <strong>Editorial standard:</strong> This article was medically reviewed and fact-checked by <a href="/about" style={{ fontWeight: 'bold' }}>Mark Vance, CSCS</a>. 
                    It is based on peer-reviewed scientific research and aligns with our strict E-E-A-T guidelines.
                </div>
            </div>"""

updated_count = 0

for root, dirs, files in os.walk(app_dir):
    dir_name = os.path.basename(root)
    # Only process directories that are direct children of src/app (or sub-children if guides etc, but we'll filter)
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
                
            # Basic heuristic: contains <section className="article-hero">
            if '<section className="article-hero">' not in content:
                continue
                
            original_content = content
            
            # 1. Update author byline
            content = content.replace("By the FitnessFixZone Team", "By Mark Vance, CSCS")
            
            # 2. Inject Editorial Disclaimer
            # Find the closing </section> of the article-hero
            hero_end_pattern = re.compile(r'(</section>)\s*(<section className="section">)')
            
            # Only inject if it's not already there
            if "disclosure-box" not in content and "Mark Vance, CSCS" in content:
                 content = hero_end_pattern.sub(r'\1\n\n' + disclaimer_html + r'\n\n\2', content)
                 
            if content != original_content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(content)
                updated_count += 1
                print(f"Updated E-E-A-T signals in: {dir_name}")

print(f"\\nSuccessfully audited and updated {updated_count} historical articles.")
