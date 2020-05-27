import setuptools
from setuptools import setup, find_packages
import os
import sys
lib_path = os.path.abspath(os.path.join(__file__, '..', '..', '..', 'lib'))
sys.path.append(lib_path)

_here = os.path.abspath(os.path.dirname(__file__))
with open("README", 'r') as f:
      long_description = f.read()


version = {}
with open(os.path.join(_here, 'Staffly', 'version.py')) as f:
      exec(f.read(), version)

setup(
      name='Staffly',
      version=version['__version__'],
      description=('A human resourcing solution'),
      long_description=long_description,
      author='Aatika Seedat',
      author_email='aatikaseedat00@gmail.com',
      project_urls={
            "Source Code": "https://github.com/AatikaSeedat/StaffingApplication",
      },
      license='MIT',

      packages=setuptools.find_packages(),
      package_data={
            # If any package contains *.txt or *.rst files, include them:
            "": ["*.txt", "*.rst"],
            # And include any *.msg files found in the "hello" package, too:
      },
      #   no dependencies in this example
      install_requires=[
            'pip==20.0.1',
            'Kivy'],
      #   no scripts in this example
      include_package_data=True,
      classifiers=[
            'Development Status :: 5 - Production/Stable',
            'Intended Audience :: Science/Research',
            'Programming Language :: Python :: 3.7.7'],
)