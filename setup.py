import setuptools
from setuptools import setup, find_packages
import os
import sys
from setuptools import setup, find_packages
lib_path = os.path.abspath(os.path.join(__file__, '..', '..', '..', 'Staffly','UI'))
sys.path.append(lib_path)
sys.path.append('/Users/aatika.seedat-cic-uk@ibm.com/Documents/StaffingApplication/Staffly')
sys.path.append('/Users/aatika.seedat-cic-uk@ibm.com/Documents/StaffingApplication/Staffly/UI')
os.path.abspath('/Users/aatika.seedat-cic-uk@ibm.com/Documents/StaffingApplication/Staffly')
_here = os.path.abspath(os.path.dirname(__file__))
with open("README.md", 'r') as f:
    long_description = f.read()

version = {}
with open(os.path.join(_here, 'Staffly', 'version.py')) as f:
    exec(f.read(), version)

setup(
    name='StaffingApplication',
    version=version['__version__'],
    description=('A human resourcing solution'),
    long_description=long_description,
    author='Aatika Seedat',
    author_email='aatikaseedat00@gmail.com',
    project_urls={
        "Source Code": "https://github.com/AatikaSeedat/StaffingApplication",
    },
    license='MIT',
    # packages =['Staffly'],

    packages=setuptools.find_packages(),
    package_data={
        # If any package contains *.txt or *.rst files, include them:
        "": ["*.txt", "*.rst"],
        # And include any *.msg files found in the "hello" package, too:
    },
    # entry_points={
    # 'console_scripts': [
    #  'start = Staffly.__main__:main',
    # ],
    # },
    #   no dependencies in this example
    install_requires=[
        'pip==20.1.1',
        'kivy==1.11.1',
        'Kivy_Garden==0.1.4',
        'Pygments==2.6.1',
        'pytest==5.4.2',
        'kivymd'],
    #   no scripts in this example
    include_package_data=True,
    classifiers=[
        'Development Status :: 5 - Production/Stable',
        'Intended Audience :: Science/Research',
        'Programming Language :: Python :: 3.7.7'],
)
