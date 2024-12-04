const problemStatements = {
    'Native Multilingual RAG System for PDF files': {
        description: `Translating books and extensive documents from one language to another is traditionally a time consuming and resource-intensive task. With advancements in Generative AI (GenAI) and Retrieval-Augmented Generation (RAG) systems, there's an opportunity to streamline this 
                    process and make it more accessible to non-technical users. The main goal is to develop 
                    a solution that simplifies the translation of PDF files into different languages using 
                    a RAG pipeline. This solution should accept PDF files, extract text, tables, and images,
                    convert them into chunks, and translate the extracted content into a selected language.
                    The translated chunks should then be stored in a vector database optimized for RAG systems.
                    This will enable RAG systems to function seamlessly in the chosen language without 
                    requiring any technical expertise. Create a user-friendly application that can be 
                    easily used by individuals with non-technical backgrounds, such as staff at 
                    translation agencies or organizations needing content translated into local 
                    languages`
    },

    'Urban Mobility Optimizer': {
        description: `In today's digital landscape, managing extensive collections of digital 
                            books poses significant challenges. Traditional library systems primarily 
                            focus on storing and organizing PDFs without providing deep content 
                            accessibility. The main objective is to develop a library management 
                            system that not only saves and organizes PDF books but also automatically 
                            processes each new addition through a pipeline that extracts content and 
                            creates a comprehensive index. This index should be stored in a vector 
                            database, enabling advanced search capabilities within the book's content. 
                            The solution will leverage different databases optimized for specific tasks 
                            while retaining the simplicity and user-friendliness of a conventional library 
                            management system. By natively integrating content extraction and indexing, 
                            users can perform efficient and in-depth searches across the entire library 
                            collection. Create a web application that combines traditional library 
                            management features with the power of vector databases and native indexing 
                            to enhance information retrieval and user experience.`
    }
    
};

function openProblemModal(title) {
const modal = document.getElementById('problemModal');
const problem = problemStatements[title];

document.getElementById('modalTitle').textContent = title;
document.getElementById('modalDescription').textContent = problem.description;



modal.classList.add('show');
setTimeout(() => modal.style.opacity = '1', 10);
}

function closeProblemModal() {
    const modal = document.getElementById('problemModal');
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
}


document.querySelectorAll('.problem-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h2').textContent.trim(); 
        openProblemModal(title);
    });
});